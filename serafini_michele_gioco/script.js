let move_speed = 3, gravity = 0.5;
let bird = document.querySelector('.bird');
let img = document.getElementById('bird-1');
let bird_props = bird.getBoundingClientRect();
let background = document.querySelector('.background');
let message = document.querySelector('.message');

img.style.display = 'none';

document.addEventListener('keydown', (e) => {
    
    if(e.key == 'Enter'){
        document.querySelectorAll('.tubo_sprite').forEach((e) => {
            e.remove();
        });
        img.style.display = 'block';
        bird.style.top = '40vh';
        message.innerHTML = '';
        message.classList.remove('messageStyle');
        play();
    }
});

function play(){
    function move(){

        let tubo_sprite = document.querySelectorAll('.tubo_sprite');
        tubo_sprite.forEach((element) => {
            let tubo_sprite_props = element.getBoundingClientRect();
            bird_props = bird.getBoundingClientRect();

            if(tubo_sprite_props.right <= 0){
                element.remove();
            }else{
                if(bird_props.left < tubo_sprite_props.left + tubo_sprite_props.width && bird_props.left + bird_props.width > tubo_sprite_props.left && bird_props.top < tubo_sprite_props.top + tubo_sprite_props.height && bird_props.top + bird_props.height > tubo_sprite_props.top){
                    message.innerHTML = 'Press Enter To Restart';
                    message.classList.add('messageStyle');
                    img.style.display = 'none';
                    return;
                }else{
                    if(tubo_sprite_props.right < bird_props.left && tubo_sprite_props.right + move_speed >= bird_props.left){
                    }
                    element.style.left = tubo_sprite_props.left - move_speed + 'px';
                }
            }
        });
        requestAnimationFrame(move);
    }
    requestAnimationFrame(move);

    let bird_dy = 0;
    function gravità(){
        bird_dy = bird_dy + gravity;
        document.addEventListener('keydown', (e) => {
            if(e.key == 'ArrowUp' || e.key == ' '){
                img.src = 'images/Bird-2.png';
                bird_dy = -7.6;
            }
        });

        document.addEventListener('keyup', (e) => {
            if(e.key == 'ArrowUp' || e.key == ' '){
                img.src = 'images/Bird.png';
            }
        });

        if(bird_props.top <= 0 || bird_props.bottom >= background.bottom){
            message.style.left = '28vw';
            window.location.reload();
            message.classList.remove('messageStyle');
            return;
        }
        bird.style.top = bird_props.top + bird_dy + 'px';
        bird_props = bird.getBoundingClientRect();
        requestAnimationFrame(gravità);
    }
    requestAnimationFrame(gravità);

    let tubo_seperation = 0;

    let tubo_gap = 35;

    function crea_tubo(){

        if(tubo_seperation > 115){
            tubo_seperation = 0;

            let tubo_posi = Math.floor(Math.random() * 43) + 8;
            let tubo_sprite_div = document.createElement('div');
            tubo_sprite_div.className = 'tubo_sprite';
            tubo_sprite_div.style.top = tubo_posi - 70 + 'vh';
            tubo_sprite_div.style.left = '100vw';

            document.body.appendChild(tubo_sprite_inv);
            let tubo_sprite = document.createElement('div');
            tubo_sprite.className = 'tubo_sprite';
            tubo_sprite.style.top = tubo_posi + tubo_gap + 'vh';
            tubo_sprite.style.left = '100vw';

            document.body.appendChild(tubo_sprite);
        }
        tubo_seperation++;
        requestAnimationFrame(crea_tubo);
    }
    requestAnimationFrame(crea_tubo);
}
