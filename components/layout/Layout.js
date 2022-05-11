import MainNavigation from './MainNavigation';
import classes from './Layout.module.scss';
import Footer from '../footer/Footer';

function Layout(props) {
  return (
    <div className={classes.app}>
      <MainNavigation />
      <div className={classes.sections}>
      <main className={classes.main}>{props.children}</main>
      </div>
    </div>
  );
}

export default Layout;
