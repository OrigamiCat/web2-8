for(var i=1;i<10;i++){
var li =document.createElement('li');
li.textContent= i + '回目';
document.getElementById('list').appendChild(li);
}

var HP=100;
while(0<HP){
  var li =document.createElement('li');
  var damage = Math.floor(Math.random()*100);
  
 HP-=damage;
  HP=(HP < 0)? 0: HP;
  li.document.getElementById('while').appendChild(li);
}

var include_tax =function(price){
 return Math.floor(price + 0.08*price); 
}
  
for(var i =1;i<10;i++){
 var li =document.createElement('li');
 var price = Math.floor(Math.random()*100);
 li.textContent= price + '円（税込み'） + include_tax(price)+'円')'; 
 document.getElementById('price').appendChild(li);
}

var constellatio =['牡羊座','牡牛座','双子座','蟹座','獅子座','乙女座','天秤座','蠍座','射手座','山羊座','水瓶座','魚座'];
for(i in constellatio){
  var li = document.createElement('li');
  li.textContent=constellatio[i];
  document.getElementById('array').appendChild(li);
} 

var player ={name:'ほげほげ', age:20, blood:'A'};
for(key in player){
  var li = document.createElement('li');
  li.textContent=key + ':'+player[key];
  document.getElementById('object').appendChild(li);
}

var separate_time =function(time){
  var sec = time.getSeconds();
  var min = time.getMinutes();
  var hours = time.getHours();
  var days = time.getDate();
  var month = time.getMonth();
  var year = time.getyear();
return [sec,min,hours,days,month,year];
}

var now = new Date();
var counter = separate_time(now);
document.getElementById('countdown').textContent = 
  counter[5] + '年' +
  counter[4] + '月' +
  counter[3] + '日' +
  counter[2] + '時' +
  counter[1] + '分' +
  counter[0] + '秒';
