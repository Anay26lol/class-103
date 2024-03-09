Webcam.set({
width:350,
height:350,
image_format:'png',
png_quality:90,
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';

    });
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zKAIq4UXk/model.json',modelLoaded);//Classifier is holding teachable machine results
function modelLoaded(){
    console.log("model is loaded");
    
}
function check(){
    img=document.getElementById("captured_img");//Img is the variable holding still pictures
    classifier.classify(img,gotResult);


}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(2);//to fixed will help us to reduce the number after decimal
    }
}