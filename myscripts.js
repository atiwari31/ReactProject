var issuesList={
issues:[],

displayIssue:function(){
	if(this.issues.length===0){
		console.log('Display issues is not availale');
	}else{
		var issueWithCompleted='';
	console.log('My Issues : ');
	for(var i=0;i<this.issues.length;i++){
		var issue=this.issues[i];
		if(issue.completed===true){
			issueWithCompleted='(x)'+issue.issueText;
		}else{
			
			issueWithCompleted='()'+issue.issueText;
		}
		console.log(issueWithCompleted);
	}
	}
},
addIssue:function(issueText){
	this.issues.push({
	issueText:issueText,
	completed:false
	});
this.displayIssue();
},

changeIssue:function(position,newissue){
	this.issues[position].issueText=newissue;
	this.displayIssue();
	
},
toggleAll: function(){
        var totalIssues=this.issues.length;
        var completedIssues=0;
        // get the total completed issues
        for(var i=0;i<totalIssues;i++){
            if(this.issues[i].completed===true){
                completedIssues++;
            }
        }
        // Case 1: if everything is true, make everything false
        if(totalIssues===completedIssues){
            for(var i=0;i<totalIssues;i++){
                this.issues[i].completed=false;
            }
        }
        // Case 2: otherwise make everything true
        else{
            for(var i=0;i<totalIssues;i++){
                this.issues[i].completed=true;
            } 
        }
        this.displayIssue();
    },
	
	deleteIssue:function(position){
		this.issues.splice(position,1);
		 this.displayIssue();
	},
	 toggleComplete:function(position){
        var issue=this.issues[position];
        issue.completed=!issue.completed;
        this.displayIssue();
    }



};

var handlers={
	displayIssue:function(){
		issuesList.displayIssue();
	},
	addIssue:function(){
		var addIssueText=document.getElementById('addIssueText');
		issuesList.addIssue(addIssueText.value);
		addIssueText.value='';
		view.displayIssue();
	},
	changeIssue:function(){
		var position=document.getElementById('changeIssuePositionInput');
		var changeIssueInput=document.getElementById('changeIssueTextInput');
		issuesList.changeIssue(position.valueAsNumber,changeIssueInput.value);
		position.value='';
		changeIssueInput.value='';
},
deleteIssue:function(position){
       // var deleteIssuePositionInput=document.getElementById('deleteIssuePositionInput');
        issuesList.deleteIssue(position);
		view.displayIssue();
        //deleteIssuePositionInput.value='';
    },
	
		toggleComplete:function(){
        var toggleIssuePositionInput=document.getElementById('toggleIssuePositionInput');
        issuesList.toggleComplete(toggleIssuePositionInput.value);
        toggleIssuePositionInput.value='';
    }
}




var toggleAll=document.getElementById('toggleAll');
toggleAll.addEventListener('click',function(){
	
	issuesList.toggleAll();
	
});


var view = {
    displayIssue :  function(){
    var issueUl=document.querySelector('ul'); 
	issueUl.innerHTML='';
	for(var i=0;i<issuesList.issues.length;i++){
		var issueLi=document.createElement('li');
		var issue=issuesList.issues[i];
		var issueTextWithCompletion='';
		if(issue.completed===true){
			issueTextWithCompletion='(X)'+issue.issueText;
		}else{
			issueTextWithCompletion='()'+issue.issueText;
			
		}
		issueLi.id=i;
		issueLi.textContent=issueTextWithCompletion;
		issueLi.appendChild(this.createDeleteButton());
		issueUl.appendChild(issueLi);
    }
	},    
    createDeleteButton: function () {
        var deleteButton;
        deleteButton =  document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteIssue';
        return deleteButton;
    },
setUpEventListener:function(){
	
	var issueUl = document.querySelector('ul');
	issueUl.addEventListener('click',function(){
		var elementClicked=event.target;
		if(elementClicked.className==='deleteIssue'){
			handlers.deleteIssue(parseInt(elementClicked.parentNode.id));
		}
});
		
		
}

};

view.setUpEventListener();


	