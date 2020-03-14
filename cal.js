
document.getElementById('countId').onclick = function(){
	var currentPPM = parseFloat(document.getElementById('currentPPM').value);
	var currentWater = parseFloat(document.getElementById('currentWater').value);
	var targetPPMVal = parseFloat(document.getElementById('targetPPM').value);
	
	var ratio = accDiv(targetPPMVal ,currentPPM);
	var totalWaterVal = accDiv(currentWater , ratio);
	var addWaterVal = totalWaterVal - currentWater;
	
	document.getElementById('addWater').textContent = addWaterVal.toFixed(1);
	document.getElementById('totalWater').textContent = totalWaterVal.toFixed(1);
}

function accDiv(arg1,arg2){
var t1=0,t2=0,r1,r2;
try{t1=arg1.toString().split(".")[1].length}catch(e){}
try{t2=arg2.toString().split(".")[1].length}catch(e){}
with(Math){
r1=Number(arg1.toString().replace(".",""))
r2=Number(arg2.toString().replace(".",""))
return (r1/r2)*pow(10,t2-t1);
}
}

Number.prototype.div = function (arg){
return accDiv(this, arg);
}
