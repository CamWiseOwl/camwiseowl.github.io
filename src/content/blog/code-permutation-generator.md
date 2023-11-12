---
title: 'Code Permutation Generator'
description: 'A simple code permutation generator in JavaScript.'
date: 'Feb 21 2022'
image: '../../assets/ales-krivec-4miBe6zg5r0-unsplash.jpg'
---

<input id="prefix" placeholder="Prefix" class="form-input">
<input id="suffix" placeholder="Suffix" class="form-input">
<div class="kw-container"></div>
<input class="add_btn form-button" type="button" onclick="addKW();" value="+">
<input class="generate_btn form-button" type="button" onclick="generate();" value="Generate Permutations">
<textarea class="results form-input" style="min-height:50vh"></textarea>
<label></label>

<script>
var kwList = [];
var kwCount = 3;

function createLists() {
	for (var i = 0; i < kwCount; ++i) {
		createKW(i);
	}
}

function createKW(i) {
	var newKW = document.createElement("input");
	newKW.id = "kw" + i;
	newKW.type = "text";
	newKW.placeholder = "Keyword List " + i;
	newKW.className = "form-input";
	document.querySelector(".kw-container").appendChild(newKW);
	kwList.push(newKW);
}

function addKW() {
	createKW(kwList.length);
}

function generate() {
	var lists = [];
	var i = 0;
	var prefix = document.querySelector('#prefix').value;
	var suffix = document.querySelector('#suffix').value;

	for (i = 0; i < kwList.length; ++i) {
		lists.push(document.querySelector('#kw' + i).value.split(","));
	}

	var listResult = cartesian(lists);
	var result = '';
	for (i = 0; i < listResult.length; ++i) {
		result += prefix + listResult[i].join("") + suffix + "\n";
	}

	document.querySelector('.results').value = result;
	document.querySelector("label").textContent = listResult.length + " codes.";

	return true;
}

function cartesian(arg) {
	var r = [], max = arg.length-1;
	function helper(arr, i) {
		for (var j=0, l=arg[i].length; j<l; j++) {
			var a = arr.slice(0); // clone arr
			a.push(arg[i][j]);
			if (i==max)
				r.push(a);
			else
				helper(a, i+1);
		}
	}
	helper([], 0);
	return r;
}

createLists();
</script>
