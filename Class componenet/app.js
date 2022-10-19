class App extends React.Component{
    constructor(){
        super();
        this.state={
            isLogged:true,
            details:[
                {id:1,name:"Pari",age:24},
                {id:2,name:"Kannan",age:22},
                {id:3,name:"Nandhu",age:20}]};
    }
    render(){
        return(
            <div class="root1">
                <h1>DETAILS</h1>
                {(this.state.isLogged) &&
                 this.state.details.map(details =>(
                    <div key={details.id} class="root">
                        <h1>{details.name}</h1>
                        <h2>{details.age}</h2>
                    </div>
                 ))}
            </div>
        );  
    }
}
ReactDOM.render(<App/>,document.getElementsByTagName("body")[0]);
