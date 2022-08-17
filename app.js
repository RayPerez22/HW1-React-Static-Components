class Aside extends React.Component {
    render(){
        return (
        <aside>
            <nav>
                <a>Dashboard</a>
                <a> Widget</a>
                <a> Reviews</a>
                <a> Customers</a>
                <a> Online Analysis</a>
                <a> Setting</a>
            </nav>

        </aside>
        )
    }
}


class Reviews extends React.Component{
    render() {
       return <section>Reviews 1281</section>       
    }
}

class AvgRating extends React.Component {
    render(){
        return <section>Average Rating</section>
    }
}

class Sentiment extends React.Component {
    render(){
        return <section>Sentiment Analysis</section>
    }
}

class WebVisitors extends React.Component {
    render(){
        return <section id='large'>
            <h3>WebVisitors</h3>
            <h2>821</h2>
            <div></div>

        </section>
    }
}
class App extends React.Component {
    render() {
      return (
        <div id='app'>
          <Aside />
          <div id='container'>
            <div id='top'>
              <Reviews />
              <AvgRating />
              <Sentiment />
            </div>
            <WebVisitors />
          </div>
        </div>
      );
    }
  }
  
{/* <section>Reviews 1,281</section>
<section>Average Rating 4.6</section>
<section>Sentiment Analysis 960 122 321</section> */}
ReactDOM.render(
    <App />,
    document.querySelector('main')
  );