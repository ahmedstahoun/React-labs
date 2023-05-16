import { Component } from "react";
class InputClass extends Component{
    
    getData = (e)=>{
            this.setState({text:e.target.value})        
    }
    resetData = (e)=>{
            this.setState({text:e.target.value=""})        
    }
    constructor(){
        super();
        this.state = {
            text:""
        }
    }
    render(){
        return(
    <div id="inputContainer" class="mt-5 d-flex flex-column align-items-center w-50 border border-primary p-5">
        <label for="exampleInputEmail1" class="form-label">Enter Your DATA</label>
        <input
          type="text"
          class="form-control m-5"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="DATA"
          value={this.state.text}
          onChange={this.getData}/>
        <p>Data: {this.state.text}</p>
        <button type="button" class="btn btn-primary"  onClick={this.resetData} >Reset</button>

   </div>
        )
    }
}

export default InputClass;
