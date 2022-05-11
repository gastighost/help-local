import MainNavigation from './MainNavigation';
import SubNavigation from './SubNavigation';
import classes from './Layout.module.scss';

function Layout(props) {
  return (
    <div className={classes.app}>
      <MainNavigation />
      <div className={classes.sections}>
      <main className={classes.main}>{props.children}</main>
      </div>
      <SubNavigation />
    </div>
  );
}

export default Layout;
