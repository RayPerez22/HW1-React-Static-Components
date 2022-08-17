class Aside extends React.Component{
    render() {
       return ( 
       <aside>Dashboard, Widget, Reviews, Customers, Online Analysis, Settings        
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
        return <section>WebVisitors 
            <div>821</div>
        </section>
    }
}
class App extends React.Component{
    render() {
        return (
            <div>
                <Aside />
                <Reviews />
                <Sentiment />
                <AvgRating />
                <WebVisitors />
            </div>
        )       
    }
}
{/* <section>Reviews 1,281</section>
<section>Average Rating 4.6</section>
<section>Sentiment Analysis 960 122 321</section> */}
ReactDOM.render(
    <App />,
    document.querySelector('main')
  );