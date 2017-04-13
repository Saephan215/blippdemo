blipp = require('blippar').blipp;

//Peel
blipp.getPeel()
	 .setOrientation("portrait")
	 .setType("fit")
	 .setScale(80);

//Getting scene objects
var scene = blipp.addScene();


//Getting marker height and width 
var markerH = blipp.getMarker().getHeight();
var markerW = blipp.getMarker().getWidth();	

//Getting screen width and height
var screenH = blipp.getScreenHeight() * 1.003;
var screenW = blipp.getScreenWidth() * 1.003;
var layoutRatio = 768/1024;

//Global Variables
var buttonScale    = screenH/12;
var fileName = 'ss_file.png';


scene.on('create', function () {
	blipp.uiVisible('navBar', false);
	// init scene
	defineMaterials();
	defineModels();
    scene.addRequiredAssets(['backButton.png','shareButton.png']);
});

// Define models
function defineMaterials() {

	scene.addLight('light2');
	scene.addMaterial('material');
}

function defineModels() {

	defineBb8();
	definePhasma();
	defineKylo();
	defineButtons();

}

function defineKylo() {
	// Kylo Body
	var rootKyloRen = scene.addTransform('kyloRenRoot');

	scene.kylo = rootKyloRen.addTransform('kyloParentCube')
							.setScale([5,5,5])
							.setRotation([0, -75, 0])
							.setTranslationZ(300)
							.setTranslationX(-1000);										
	
	var kyloRenFace = scene.kylo.addMesh('kyloFace.md2')
								.setName('kyloFace')
								.setTexture('kylorend_diffuse.jpg')
								.setTranslation([4.195625, 20.967987, 15.008972])
								.setScale([34.509586, 34.509586, 34.509586])
								.setSides('both');

	var kyloArms = scene.kylo.addMesh('kyloArms.md2')
							 .setName('kyloArms')
							 .setTexture('kylorend_diffuse.jpg')
							 .setTranslation([-5.451935, -9.735321, 1.536621])
							 .setScale([34.509586, 34.509586, 34.509586])
							 .setSides('both');

	var kyloCloak = scene.kylo.addMesh('kyloCloak.md2')
                              .setName('kyloCloak')
                              .setTranslation([-16.195625, -10.967987, 15.008972])
                              .setSides('both')
                              .setScale([34.509586, 34.509586, 34.509586])
                              .setTexture('kylorend_diffuse.jpg');

    var kyloHands = scene.kylo.addMesh('kyloHands.md2')
    						  .setName('kyloHands')
    						  .setTranslation([6.749313, -27.197479, -14])
                              .setScale([34.509586, 34.509586, 34.509586])
                              .setTexture('kylorend_diffuse.jpg')
                              .setSides('both');

    var kyloLegs = scene.kylo.addMesh('kyloLegs.md2')
    						 .setName('kyloLegs')
 							 .setScale([34.509586, 34.509586, 34.509586])
                             .setTranslation([-0.753405, -72.135048, 25.231506])
                             .setTexture('kylorend_diffuse.jpg')
                             .setSides('both');
    //Refactor                         	
    scene.kylo.kyloLowerB = scene.kylo.addMesh()
	                          	 .setName('kyloLowerB')
	                          	 .setSides('both');

    var kyloLowerB_tpath = scene.kylo.kyloLowerB.addMesh('kyloLowerB_tpath.md2')
										    	.setName('kyloLowerB_tpath')
				                                .setTranslation([-20.617485, -71.887543, 25.892067])
				                                .setScale([34.509586, 34.509586, 34.509586])
				                                .setHidden(true);

    var kyloLowerB_linked = kyloLowerB_tpath.addMesh('kyloLowerB.md2')
	                                        .setName('kyloLowerB_linked')
	                                        .setTexture('kylorend_diffuse.jpg');   

    var kyloUpperB = scene.kylo.addMesh('kyloUpperB.md2')
                               .setName('kyloUpperB')
                               .setTranslation([-13, -5, 19.740143])
                               .setScale([34.509586, 34.509586, 34.509586])
                               .setSides('both')
                               .setTexture('kylorend_diffuse.jpg');

    var saberLight = scene.kylo.addMesh('saberLight.md2')
							    						 .setTranslation([58.099262, -17.834216, 26.578369])
	                             .setScale([34.509586, 34.509586, 34.509586])
	                             .setTexture('lightsaber.jpg')   
	                             .setSides('both');    

	var saberNoiseGeo = scene.kylo.addMesh('saberNoiseGeo.md2')
								  .setName('saberNoiseGeo')
								  .setAlpha([0.3])
								  .setTranslation([-20.292892, -5.920837, 80.610016])
								  .setScale([ 0.393701, 0.393701, 0.393701])
								  .setSides('both')
								  .setTexture(["saberNoise_Diffuse.jpg", "saberNoise_Diffuse-A.jpg"])
								  .setType('phantom');

    var saberPlaneGeo = scene.kylo.addMesh('saberPlaneGeo.md2')
                                  .setName('saberPlaneGeo')
                                  .setAlpha([0.3])
                                  .setTranslation([-17.430164, -6.805725, 77.504242])
                                  .setSides('both')
                                  .setType('phantom')
                                  .setTexture(["lightsaberPlane_diffuse.jpg", "lightsaberPlane_diffuse-A.jpg"]);

    var saberPlaneGeo2 = scene.kylo.addMesh('saberPlaneGeo2.md2')
                                   .setName('saberPlaneGeo2')
                                   .setTranslation([19.252289, -8.81366, 31.732849])
                                   .setAlpha([0.3])
                                   .setSides('both')
                                   .setTexture(["lightsaberPlane_diffuse.jpg", "lightsaberPlane_diffuse-A.jpg"])
                                   .setType('phantom');
                                   
    var shortSaberPlaneGeo = scene.kylo.addMesh('shortSaberPlaneGeo.md2')
		                               .setName('shortSaberPlaneGeo')
		                               .setTranslation([13.238754, -38.746857, 39.569153])
		                               .setSides('both')
		                               .setType('phantom')
		                               .setAlpha([0.3])
		                               .setTexture(["lightsaberPlane_diffuse.jpg", "lightsaberPlane_diffuse-A.jpg"]);

	// var kyloTxt = kyloCube.getChild('kyloTxt')

}


function definePhasma() {

	var rootPhasma = scene.addTransform('rootPhasma');
						  

	scene.phasma = rootPhasma.addTransform('phasmaParentCube')
							 .setScale([0.0009,0.0009,0.0009])
						     .setRotation([25, -50, 0])
						     .setTranslationZ(400);

	var centerBody = scene.phasma.addMesh('centerBody.md2')
							     .setName('phasmaCenterBody')
								 .setTexture('neostardest_diffuse.jpg')
								 .setTranslation(0,0,0)
								 .setScale([34.509586, 34.509586, 34.509586])
								 .setSides('both');

	var centerBody01 = scene.phasma.addMesh('centerBody01.md2')
								   .setName('phasmaCenterBody1')
								   .setScale(100,100,100)
								   .setTranslation(0,0,0)
								   .setTexture('neostardest_diffuse.jpg')
								   .setSides('both');

	var lSide = scene.phasma.addMesh('lSide.md2')
				            .setName('phasmaLSide')
				            .setTexture('neostardest_diffuse.jpg')
				            .setScale(100,100,100)
				            .setTranslation(0,0,0);

	var lSide01 = scene.phasma.addMesh('lSide01.md2')
							  .setName('phasmaLSide01')
							  .setTexture('neostardest_diffuse.jpg')
							  .setTranslation(0,0,0)
							  .setScale(100,100,100);


	var rSide = scene.phasma.addMesh('rSide.md2')
							.setName('phasmaRSide')
						    .setTexture('neostardest_diffuse.jpg')
						    .setTranslation(0,0,0)
						    .setScale(100,100,100);

	var rSide1 = scene.phasma.addMesh('rSide01.md2')
							 .setName('phasmaRSide01')
							  .setTexture('neostardest_diffuse.jpg')
							  .setTranslation(0,0,0)
							  .setScale(100,100,100);

}

function defineBb8 () {

	var rootBb8 = scene.addTransform('rootBb8');

	scene.bb8 = rootBb8.addTransform('parentCubeBb8')
					   .setTranslation(-1.164876, 0, 200.43147)
					   .setScale(2.5, 2.5, 2.5)
					   .setTranslationX(1000);

	var bb8Body = scene.bb8.addMesh('bb8Body01Geo.md2')
						   .setName('bb8Body01Geo')
						   .setTexture('bb8_diffuse.jpg')
						   .setTranslation(0, -0.000023, -6.964111)
						   .setRotation(-50, 54, 0)
						   .setScale(111.681366, 111.681313, 111.68129);

	var bb8Head = scene.bb8.addMesh('bb8head01Geo.md2')
						   .setName('bb8Head01Geo')
						   .setTexture('bb8_diffuse.jpg')
						   .setTranslation(13.906099, 110.917709, 25.964111)
						   .setRotation(0, -95, 0)
						   .setScale(111.681274, 111.681389, 111.681229);

	var bb8HeadEye01Geo = scene.bb8.addMesh('bb8HeadEye01Geo.md2')
								   .setName('bb8HeadEye01Geo')
								   .setTexture('bb8_diffuse.jpg')
								   .setTranslation(30, 107.917709, 25)
								   .setRotation(43,181,90)
								   .setScale(111.681244, 111.681458, 111.681259);

	var bb8HeadEye02Geo = scene.bb8.addMesh('bb8HeadEye02Geo.md2')
								   .setName('bb8HeadEye02Geo')
								   .setTexture('bb8_diffuse.jpg')
								   .setTranslation(13, 108.917709, 27)
								   .setRotation(0, -90, 5)
								   .setScale(111.681244, 111.681458, 111.681259);

}

function defineButtons() {
	// Buttons initialization
	var buttonPosX     = screenH/6;
	var buttonPosY     = (screenH/5) -(screenH/2);
	var buttonPosYStep = screenH/24;
	var buttonScale    = screenH/12;


	var plane = scene.addSprite()
					 .setTexture(['starWarsIntroLogo.jpg', 'starWarsIntroLogo-A.jpg'])
					 .setScale(markerW, markerH, 1)
					 .setLight('light2')
				 	 .setMaterial('material');

	//Button definitions
	var buttonR = scene.getScreen().addSprite('up.png')
								   .setName('rightButton')
								   .setScale(buttonScale)
								   .setTranslation(buttonPosX, buttonPosY + buttonPosYStep, 0)
								   .setRotationZ(90)
								   .setLight('light2')
								   .setMaterial('material')
								  .setType('aura');
	
	buttonR.setTranslation([(-screenW/2)+(buttonR.getScale()[1]/1.5),(-screenH/2)+(buttonR.getScale()[0]/0.75),1]); 

	var buttonL = scene.getScreen().addSprite('down.png')
								   .setName('leftButton')
								   .setTranslation(buttonPosX, buttonPosY - buttonPosYStep, 0)
								   .setRotationZ(90)
								   .setScale(buttonScale)
								   .setLight('light2')
								   .setMaterial('material');
	
	buttonL.setTranslation([(screenW/2)-(buttonL.getScale()[1]/1.5),(-screenH/2)+(buttonL.getScale()[0]/0.75),1]); 								   

	var shutterButton = scene.getScreen()
							 .addSprite('shutterButton.png')
							 .setScale(buttonScale);	
	
	shutterButton.setTranslation([0,(-screenH/2)+(shutterButton.getScale()[0]/0.75),1]);							 

	var saveAssets = true;
	var saveGallery = false;
	var saveServer = false;
	var photoSize = 256;

	var kyloTranslationX = scene.kylo.getTranslationX();
	var bb8TranslationX = scene.bb8.getTranslationX();
	var phasmaTranslationX = scene.phasma.getTranslationX();

	// Add button events
	buttonR.on('touchEnd', function() {

		slideModel(scene.kylo, (kyloTranslationX += 1000));
		slideModel(scene.phasma, (phasmaTranslationX += 1000));
		slideModel(scene.bb8, (bb8TranslationX += 1000));

	});

	buttonL.on('touchEnd', function() {

		slideModel(scene.bb8, (bb8TranslationX -= 1000));
		slideModel(scene.kylo, (kyloTranslationX -= 1000));
		slideModel(scene.phasma, (phasmaTranslationX -= 1000));

	});	
	//Photosharing event
	shutterButton.on('touchEnd', function(){
		buttonR.setHidden(true);
		buttonL.setHidden(true);
		shutterButton.setHidden(true);

		blipp.takePhoto(

			{

				saveToAssets: saveAssets, 
				saveToGallery: saveGallery, 
				saveToServer: saveServer, 
				filename: fileName

			}, 

			function(result) {

				blipp.uiVisible('peelCloseButton', false);

     		var preview = scene.getScreen()
     		 					   .addSprite(fileName)
								   .setTranslation(0,0,1)
								   .setScale(screenW, screenH, 1);

		    var backButton =  scene.getScreen().addSprite('backButton.png')
																				   .setScale(buttonScale * 0.75);

			  backButton.setTranslation([(-screenW/2)+(backButton.getScale()[1]/1.5),(screenH/2)-(backButton.getScale()[0]/0.75),1]); 

				var shareButton = scene.getScreen().addSprite('shareButton.png')
																				   .setScale(buttonScale * 0.75);

			  shareButton.setTranslation([0,(-screenH/2)+(shareButton.getScale()[0]/0.75),1]);

				shareButton.on('touchEnd', function(){

					backButton.destroy();
					shareButton.destroy();
					
					blipp.shareAsset('generic', '', '', '', fileName, function() {
							buttonR.setHidden(false);
							buttonL.setHidden(false);
							shutterButton.setHidden(false);	
							preview.destroy();
					});
				});
				
	    	backButton.on('touchEnd', function() {

					preview.destroy();
					backButton.destroy();
					shareButton.destroy();

					buttonR.setHidden(false);
					buttonL.setHidden(false);
					shutterButton.setHidden(false);		
					blipp.uiVisible('peelCloseButton', true);
			
				});	

			});

		});

	}

//****** FUNCTIONS ******//
function slideModel (model, modelTranslationX) {
		
    var buttonL = scene.getScreen().getChild('leftButton');
	var buttonR = scene.getScreen().getChild('rightButton');

	var anim = model.animate()
				    .translationX(modelTranslationX)
				    .duration(1000);

	//Disable arrow buttons during animation
	anim.on('start', function (){

		buttonL.setClickable(false);
		buttonR.setClickable(false);

	});
   
	//Disable arrow buttons to prevent models from panning off screen
	anim.on('end', function(){

		if (scene.kylo.getTranslationX() === 0){

			buttonR.setClickable(false);
			buttonL.setClickable(true);

		} else if (scene.bb8.getTranslationX() === 0) {
			buttonL.setClickable(false);
			buttonR.setClickable(true);

		} else  {

			buttonR.setClickable(true);
			buttonL.setClickable(true);

		}

	});								

}