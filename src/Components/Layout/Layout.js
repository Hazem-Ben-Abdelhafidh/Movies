import ToolBar from "../ToolBar/ToolBar";
const Layout = (props) => {
    return ( 
      <>
        <ToolBar/>
        <main>
            {props.children}
        </main>
        footer 
      </>
     );
}
 
export default Layout;