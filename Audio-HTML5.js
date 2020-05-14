
// PLAYER VARIABLES

var mp3snd = "tik.mp3";

document.write('<audio autoplay="autoplay">');
document.write('<source src="'+mp3snd+'" type="audio/mp3">');
document.write('<!--[if lt IE 9]>');
document.write('<bgsound src="'tik.mp3'" loop="infinite">');
document.write('<![endif]-->');
document.write('</audio>');
