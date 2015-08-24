/** @jsx React.DOM */

var Timer = React.createClass({

    getInitialState: function() {
        return {elapsed: 0};
    },

    componentDidMount: function() {
        this.timer = setInterval(this.tick, 500);
    },

    componentWillUnmount: function() {
        clearInterval(this.timer);
    },

    tick: function() {
        this.setState( {elapsed: new Date() - this.props.start} );
    },

    render: function() {
        var elapsed = Math.round(this.state.elapsed / 100);

        var seconds = (elapsed / 10).toFixed(1);

        return(
            <h1>Time elapsed since first run: {seconds}</h1>
        );
    }
});

React.render(
    <Timer start={Date.now()} />,
    document.body
);
