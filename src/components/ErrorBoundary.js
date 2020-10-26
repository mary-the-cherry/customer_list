import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null };
    }

    static getDerivedStateFromError(error, errorInfo) {
    
        return { hasError: true };
        this.setState({ hasError: true, error, errorInfo });
        console.log('Der Fehler wurde erfolgreich abgefangen');
    }

    componentDidCatch(error, errorInfo) {

    }

    render() {
        if (this.state.hasError) {
        
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}