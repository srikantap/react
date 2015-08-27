/** @jsx React.DOM */

var InputBox = React.createClass({

    render: function() {
        return (
            <div>
            <input type="text" value={this.props.value} ref="textbox" onChange={this.props.handleChange}/>
            <h2>{this.props.value}</h2>
            </div>
        );
    }
});

var ActionButton = React.createClass({
    handleAction: function() {
        this.setState();
        console.log("onAction");
    },

    render: function() {
        return(
            <input type="button"
                value={this.props.value} 
                onClick={this.props.onAction} />
        );
    }
});

var DisplayArea = React.createClass({
    /*
    getInitialState: function() {
        return({text: "Not clicked"});
    },

    */
    handleChange: function(e) {
        console.log("DisplayArea: In handleChange(): ", e);
        this.setState({text: "Clicked"});
    },

    render: function() {
        return(
            <div>
                <InputBox value="Type something here..." whenChanged={this.handleChange}/>
                <ActionButton value="Show text" onAction={this.handleAction}/>
            </div>
            
        );
    }
});

React.render(
    <DisplayArea/>,
    document.getElementById('displayarea')
);

