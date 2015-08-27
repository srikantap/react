/** @jsx React.DOM */

var InputBox = React.createClass({
    getInitialState: function() {
        return ({inputtext: ''});
    },

    handleChange: function() {
        this.setState({inputtext: this.state.inputtext});
        this.props.callbackParent(this.state.inputtext);
    },

    render: function() {
        return (
            <input type="text" onChange={this.handleChange}/>
        );
    }
});

var ActionButton = React.createClass({
    handleAction: function() {
        this.setState();
    },

    render: function() {
        return(
            <input type="button"
                value={this.props.value} 
                onClick={this.onAction} />
        );
    }
});

var DisplayArea = React.createClass({
    getInitialState: function() {
        return({text: "Not clicked"});
    },

    handleChange: function(e) {
        this.setState({text: this.state.e});
    },

    render: function() {
        return(
            <div>
                <InputBox callbackParent={this.handleChange}/>
                <ActionButton value="Show text" onAction={this.handleAction}/>
                <h2>{this.state.text}</h2>
            </div>
            
        );
    }
});

React.render(
    <DisplayArea/>,
    document.getElementById('displayarea')
);

