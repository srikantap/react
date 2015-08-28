
var ActionButton = React.createClass({
    handleClickAction: function() {
        this.props.notifyParent();
    },

    render: function() {
        return(
            <input type="button"
                value={this.props.value} 
                onClick={this.props.notifyParent} />
        );
    }
});

var InputBox = React.createClass({
    getInitialState: function() {
        return ({inputtext: ''});
    },

    handleChange: function() {
        // Find the input DOM Element using refs, and retrieve its value;
        var changedText = React.findDOMNode (this.refs.myInput).value;

        // Trigger render and set inputtext to new text;
        this.setState({inputtext: changedText});

        // Inform parent about the change;
        this.props.callbackParent(changedText);
    },

    render: function() {
        return (
            <input type="text" ref="myInput" onChange={this.handleChange}/>
        );
    }
});

var DisplayArea = React.createClass({
    getInitialState: function() {
        return({displaytext: ''});
    },

    handleTextChange: function(newText) {
        // Store the new text in my state;
        // Don't trigger UI re-render;
        this.state.displaytext = newText;
    },

    handleClickAction: function(newText) {
        // Show button has been clicked. So trigger render.
        this.setState();
    },

    render: function() {

        // Decide whether to display the text (if len > 0), or <null>
        var text = this.state.displaytext.length ? this.state.displaytext : "<null>";

        // Text + callback to self, to notify of text entry;
        // Button + callback to self, to notify of click;
        // Placeholder to display entered text;
        return(
            <div>
                <InputBox callbackParent={this.handleTextChange} />
                <ActionButton value="Show text" notifyParent={this.handleClickAction}/>
                <h2>Text entered is: {text}</h2>
            </div>
            
        );
    }
});

React.render(
    <DisplayArea/>,
    document.getElementById('displayarea')
);

