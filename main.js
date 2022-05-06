function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true })
    Classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/giAHvNMly/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
    console.log(gotResults);
}

function gotResults(error,results){
    
}