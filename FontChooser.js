class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state={visible: false,fsize: parseInt(this.props.size), check: false, tcolor: true};
    }
    toggle(){
		this.setState({visible: !this.state.visible});
	 
	}
	
	
	additive()
	{ if(this.state.fsize != this.props.max)
		{this.setState({fsize: this.state.fsize+1}); 
        if(this.state.fsize+1==this.props.max||this.state.fsize+1==this.props.min)
		this.setState({tcolor: false});
        else
        this.setState({tcolor: true});	}
	else
		this.setState({tcolor: false});
	    
	}
	subtractive()
	{ 
	  if(this.state.fsize != this.props.min)
	{  this.setState({fsize: this.state.fsize-1}); 
        if(this.state.fsize-1==this.props.max||this.state.fsize-1==this.props.min)
		this.setState({tcolor: false});
        else
	this.setState({tcolor: true});	}
     
	 else
		this.setState({tcolor: false});
         
	   
	}
	checkmate()
	{       
			this.setState({check: !this.state.check});
		    
	}
	getback()
	{    this.setState({tcolor: true}); 
	     this.setState({check: false});  
		 this.setState({fsize: 16}); 
	}

    render() {
      var tsize=this.state.fsize;
	  var weight=this.state.check?'bold':'normal';
	  var mycolor=this.state.tcolor?'black':'red';
	  
	return(
	       <div>
          
	       <input type="checkbox"  id="boldCheckbox" hidden={this.state.visible?'':'true'}  onChange={this.checkmate.bind(this)} />
	       <button id="decreaseButton" hidden={this.state.visible?'':'true'} onClick={this.subtractive.bind(this)}>-</button>
	       <span id="fontSizeSpan" hidden={this.state.visible?'':'true'}>{this.state.fsize}</span>
	       <button id="increaseButton" hidden={this.state.visible?'':'true'} onClick={this.additive.bind(this)}>+</button> 
	       <span id="textSpan" onClick={this.toggle.bind(this)} onDoubleClick={this.getback.bind(this)} style={{fontWeight: weight ,fontSize: tsize ,color:mycolor }} >{this.props.text}</span>
	       </div>
	);
    }
}

