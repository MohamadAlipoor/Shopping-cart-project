import React from 'react';
import { Container, Button } from 'reactstrap';
import Counters from './Counters';
import NavBar from './NavBar';

class App extends React.Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
            { id: 5, value: 0 }
        ]
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const indexCounter = counters.indexOf(counter);
        counters[indexCounter] = { ...counter };
        counters[indexCounter].value++;
        this.setState({ counters });
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }

    handleReset = () => {

        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        })
        this.setState({ counters });
    }

    render() {

        return (
            <div>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <div style={{ float: 'right' }}>
                    <Container>
                        <Counters
                            counter={this.state.counters}
                            handleDelete={this.handleDelete}
                            handleIncrement={this.handleIncrement}
                        />

                        <Button color='success' className='btn-sm m-2'
                            onClick={this.handleReset}>
                            ریستارت
                        </Button>

                    </Container>
                </div>
            </div>
        )
    }
}

export default App;