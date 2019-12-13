import React, { Component } from "react";



class Addition extends Component{
    constructor(props){
        super(props);

            this.state={

                number1:0,
                number2:0,
                additionResult:null
          
              };

            

        }
    
        getNumber1Data=(event)=>{
            this.setState({number1 : event.target.value})
            console.log(event.target.value);
        }
        getNumber2Data=(event)=>this.setState({number2 : event.target.value});

        getAdditionResult=(e)=>{
            
            let add=parseInt(this.state.number1) + parseInt(this.state.number2);
            console.log(this.state.number1);
            this.setState({additionResult:add});
            console.log(this.state.additionResult);
        }
        
        

        
    
    render(){
        
        const style={
            width:"200px",
            display:"inline"
            
        }

        

    return(

        <div>
            <div className="row">
          <div className="col-md-6">
          
          <div className="card text-white bg-secondary mb-3" style={{maxwidth:"18rem",margin:"20px"}}>
          <div className="card-body">
          <h3 className="card-title">Addition Program</h3>
          <p className="card-text">Please enter numbers in the boxes below.</p>
          
          <input type="number" placeholder="Please enter a number" className="form-control" style={style} onChange={this.getNumber1Data}/>
          <span style={{margin:"10px"}}>+</span>
            <input type="number" placeholder="Please enter a number" className="form-control" style={style} onChange={this.getNumber2Data}/><br/><br/>
            <button type="button" className="btn btn-primary" onClick={this.getAdditionResult}>Add</button><br/><br/>
            <label htmlFor="lblAddition">{this.state.additionResult}</label>

        </div>
      </div>

            
          </div>
        </div>

        </div>

    );
}
}
export default Addition;