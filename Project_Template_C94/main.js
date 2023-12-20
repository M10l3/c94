
// Crie a variável canvas
var canvas = new fabric.Canvas('myCanvas');
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;
//Defina as posições iniciais das imagens da bola e do buraco.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// programe o envio da imagem do buraco de golfe ao canvas
	fabric.Image.fromURL("golf-b.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
            top:hole_y,
            left:hole_x
		});
		canvas.add(hole.obj);
	   });
	new_image();
}

function new_image()
{
	// programe o envio da imagem da bola ao canvas
	{ tecido.Image.fromURL ("bola.png", function (Img) { ball_obj = Img; ball_obj.scaleToWidth (50);
		 ball_obj.scaleToHeight (50);
		  ball_obj.set ({ topo: bola_y, esquerda: bola_x }) ;
		   canvas.add(bola_obj); });
		 } window.addEventListener("keydown", my_keydown);}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){ canvas.remove(ball_obj);
		 console.log("Você acertou o buraco!!!");
		  document.getElementById("hd3").innerHTML="Você acertou o buraco!!!";
		   document.getElementById("myCanvas").style.borderColor="red"; }
	/* Verifique as coordenadas da bola e do buraco para concluir o jogo.
	Identifique as coordenadas, caso forem iguais, remova  a imagem da bola,
	exiba "Você acertou o buraco!!"
	e troque a cor da borda do canvas para vermelho (red). */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
	}
	
	function up()
	{
		if(ball_y >=5) 
		{ ball_y = ball_y - block_image_height;
			 console.log("altura do bloco da imagem = " + block_image_height); 
			 console.log("Quando a seta para cima é pressionada, X = " + ball_x + " , Y = "+ball_y);
			  tela.remove(bola_obj); 
			  new image(); 	
	}

	function down()
	{
		if(ball_y <=450) 
		{ ball_y = ball_y - block_image_height;
			console.log("altura do bloco da imagem = " + block_image_height); 
			console.log("Quando a seta para baixo é pressionada, X = " + ball_x + " , Y = "+ball_y);
			 tela.remove(bola_obj); 
			 new image(); 	
   }	
	}

	function left()
	{
		{
			if(ball_y >5) 
		{ ball_y = ball_y - block_image_height;
			console.log("altura do bloco da imagem = " + block_image_height); 
			console.log("Quando a seta para esquerda é pressionada, X = " + ball_x + " , Y = "+ball_y);
			 tela.remove(bola_obj); 
			 new image(); 	
		}
	}
}

	function right()
	{
		if(ball_x <=1050)
		{
		{ ball_y = ball_y - block_image_height;
			console.log("altura do bloco da imagem = " + block_image_height); 
			console.log("Quando a seta para direita é pressionada, X = " + ball_x + " , Y = "+ball_y);
			 tela.remove(bola_obj); 
			 new image(); 	
		}
	}
	
}

