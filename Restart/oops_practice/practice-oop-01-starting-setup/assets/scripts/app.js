class Tooltip{

}

class ProjectItem{
    constructor(id, updateProjectListsFunction){
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }

    connectMoreInfoButton(){

    }

    connectSwitchButton(){
        const projectItemElement = document.getElementById(this.id);    
        const switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn.addEventListener('click',this.updateProjectListsHandler);
    }
 }

class ProjectList{ 
    projects = [];

    constructor(type, switchHandlerFunction){
        this.type = type;
        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        for(let projItem in projectItems){
            this.projects.push(new ProjectItem(projItem.id, this.switchProject.bind(this)));
        }
        console.log(this.projects);
    }
    
    setSwitchHandlerFunction(){
      this.switchHandler = switchHandlerFunction;
    }

    addProject(){
        console.log(this);
    }

    switchProject(projectId){
        this.switchHandler(this.projects.find(p=>p.id === projectId));
        const projectIndex = this.projects.findIndex(p =>p.id === projectId);
        this.projects.splice(projectIndex,1);
    }
}

class App{
    static init(){
        const activeProjectsList = new ProjectList('active'); 
        const finishedProjectsList = new ProjectList('finished'); 
        activeProjectsList.switchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));
        finishedProjectsList.switchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));
    }
 }

 App.init();