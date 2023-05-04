let move_speed = 3, gravity = 0.5;
let bird = document.querySelector('.bird');
let img = document.getElementById('bird-1');
let bird_props = bird.getBoundingClientRect();
let background = document.querySelector('.background');
let messaggio = document.querySelector('.message');
let fly_audio = new Audio("fly.mp3");

img.style.display = 'none';
document.addEventListener('keydown', (e) => {
    
    if(e.key == 'Enter'){
        document.querySelectorAll('.pipe_sprite').forEach((e) => {
            e.remove();
        });
        img.style.display = 'block';
        bird.style.top = '40vh';
        messaggio.innerHTML = '';
        messaggio.classList.remove('messageStyle');
        gioca();
    }
});
function gioca(){

    function move(){
        let pipe_sprite = document.querySelectorAll('.pipe_sprite');
        pipe_sprite.forEach((element) => {
            let pipe_sprite_props = element.getBoundingClientRect();
            bird_props = bird.getBoundingClientRect();

            if(pipe_sprite_props.right <= 0){
                element.remove();
            }else{
                if(bird_props.left < pipe_sprite_props.left + pipe_sprite_props.width && bird_props.left + bird_props.width > pipe_sprite_props.left && bird_props.top < pipe_sprite_props.top + pipe_sprite_props.height && bird_props.top + bird_props.height > pipe_sprite_props.top){
                    messaggio.innerHTML = 'Press Enter To Restart';
                    messaggio.classList.add('messageStyle');
                    img.style.display = 'none';
                    return;
                }else{
                    if(pipe_sprite_props.right < bird_props.left && pipe_sprite_props.right + move_speed >= bird_props.left){
                    }
                    element.style.left = pipe_sprite_props.left - move_speed + 'px';
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
            if(e.key == 'ArrowUp'){
                img.src = 'images/Bird-2.jpg';
                bird_dy = -7.6;
                fly_audio.play();
            }
        });
        document.addEventListener('keyup', (e) => {
            if(e.key == 'ArrowUp'){
                img.src = 'images/Bird.jpg';
                
            }
        });
        if(bird_props.top <= 0 || bird_props.bottom >700){
            messaggio.style.left = '28vw';
            window.location.reload();
            messaggio.classList.remove('messageStyle');
            return;
        }
        bird.style.top = bird_props.top + bird_dy + 'px';
        bird_props = bird.getBoundingClientRect();
        requestAnimationFrame(gravità);
    }
    requestAnimationFrame(gravità);
    let pipe_seperation = 0;
    let pipe_gap = 35;

    function crea_tubo(){
        if(pipe_seperation > 115){
            pipe_seperation = 0;

            let pipe_posi = Math.floor(Math.random() * 43) + 8;
            let pipe_sprite_div = document.createElement('div');
            pipe_sprite_div.className = 'pipe_sprite';
            pipe_sprite_div.style.top = pipe_posi - 70 + 'vh';
            pipe_sprite_div.style.left = '100vw';

            document.body.appendChild(pipe_sprite_div);
            let pipe_sprite = document.createElement('div');
            pipe_sprite.className = 'pipe_sprite';
            pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
            pipe_sprite.style.left = '100vw';

            document.body.appendChild(pipe_sprite);
        }
        pipe_seperation++;
        requestAnimationFrame(crea_tubo);
    }
    requestAnimationFrame(crea_tubo);
}
