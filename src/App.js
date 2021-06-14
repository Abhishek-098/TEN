import { Route, Switch } from 'react-router';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';

function App() {
  return (<>
            <Navbar/>
            {/* add paths here */}
              <Switch>
                  <Route exact path = '/' component={Homepage} />
                  {/* <Route exact path = '/online-courses' component={Courses} />
                  <Route exact path = '/hiring' component={Hiring} /> */}
                  {/* <Route exact path = '/contactus' component={ContactUs}/> */}

              </Switch>
              {/* <Footer/> */}
          </>
  );
}

export default App;
