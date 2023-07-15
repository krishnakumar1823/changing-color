var color=document.getElementById("changingColor")
color.innerHTML=`<h6 id="color">Background color changing</h6>
				<div class="col-6 row justify-content-center">
					<div class="col-2">
						<input type="button" onclick="selected('red')" style="background-color:red;height:30px;width: 30px;display: inline-block" value="red"></input>
					</div>
					<div class="col-2">
						<input type="button" onclick="selected('orange')" style="background-color:orange;height:30px;width: 30px;display: inline-block;" value="orange"></input>
					</div>
					<div class="col-2">
						<input type="button" onclick="selected('black')" style="background-color:black;height:30px;width: 30px;display: inline-block;" value="black"></input>
					</div>
					<div class="col-2">
						<input type="button" onclick="selected('white')" style="background-color:white;height:30px;width: 30px;display: inline-block;" value="white"></input>
					</div>
					<div class="col-2">
						<input type="button" onclick="selected('blue')" style="background-color:blue;height:30px;width: 30px;display: inline-block;" value="blue"></input>
					</div>
					<div class="col-2">
						<input type="button" onclick="selected('yellow')" style="background-color:yellow;height:30px;width: 30px;display: inline-block;" value="yellow"></input>
					</div>
					<div class="col-2">
						<input type="button" onclick="selected('green')" style="background-color:green;height:30px;width: 30px;display: inline-block;" value="green"></input>
					</div>
					<div class="col-2">
						<input type="button" onclick="selected('lightgreen')" style="background-color:lightgreen;height:30px;width: 30px;display: inline-block;" value="lightgreen"></input>
					</div>
					<div class="col-2">
						<input type="button" onclick="selected('powderblue')" style="background-color:powderblue;height:30px;width: 30px;display: inline-block;" value="powderblue"></input>
					</div>
					<div class="col-2">
						<input type="button" onclick="selected('gray')" style="background-color:gray;height:30px;width: 30px;display: inline-block;" value="gray"></input>
					</div>
					<div class="col-2">
						<input type="button" onclick="selected('pink')"style="background-color:pink;height:30px;width: 30px;display: inline-block;" value="pink"></input>
					</div>
					<div class="col-2">
						<input type="button" onclick="selected('violet')" style="background-color:violet;height:30px;width: 30px;display: inline-block;" value="violet"></input>
					</div>
					<div class="col-10">
						<input type="submit" onclick="apply()" id="btn" value="Apply">
					</div>
				</div>`

var change=""
function selected(value){
	change=value

	var btn=document.getElementById("btn")
	btn.style.backgroundColor=change
}
function apply(){
	var bdy=document.getElementById("bdy")
	bdy.style.backgroundColor=change

	var clr=document.getElementById("color")
	clr.style.color=change
}