
var HeadSelector = React.createClass({
    handleChecked: function(event) {
        this.props.notifyParent(event.target.value);
    },

    render: function() {
        // Repetitive. Can I reduce it? Use RadioGroup?
        return (
            <div>
                <form>
                    <input type="radio" name="head" value="h1" onChange={this.handleChecked} /> H1
                    <br/>
                    <input type="radio" name="head" value="h2" onChange={this.handleChecked} /> H2
                    <br/>
                    <input type="radio" name="head" value="h3" onChange={this.handleChecked} /> H3
                    <br/>
                    <input type="radio" name="head" value="h4" onChange={this.handleChecked} /> H4
                    <br/>
                </form>
            </div>
        );
    }
});

var DisplayText = React.createClass({

    // Ideally, this should be a one line function. How shall I do that?
    render: function() {
        if (this.props.checked === "h1")
        {
            return ( <h1> {this.props.text} </h1> );
        }
        else if (this.props.checked === "h2")
        {
            return ( <h2> {this.props.text} </h2> );
        }
        else if (this.props.checked === "h3")
        {
            return ( <h3> {this.props.text} </h3> );
        }
        else if (this.props.checked === "h4")
        {
            return ( <h4> {this.props.text} </h4> );
        }
    }
});

var HeadDisplayText = React.createClass({

    // Do I need to maintain this?
    getInitialState: function() {
        return ({checked: "h1"});
    },

    handleChecked: function(which) {
        this.setState({checked: which});
    },

    render: function() {
        return(
            <div>
                <HeadSelector notifyParent={this.handleChecked}/>
                <DisplayText text="Testing text" checked={this.state.checked}/>
            </div>
            
        );
    }
});

React.render(
    <HeadDisplayText/>,
    document.getElementById('head-disp-area')
);

