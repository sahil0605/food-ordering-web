import CartIcon from '../Cart/CartIcon';
import classes  from './CartButton.module.css'
import { useContext } from "react";
import CartContext from "../../Store/Cart-Context";
const HeaderCart = props => {
    const cartCtx = useContext(CartContext);
   
    const noOfCartItems = cartCtx.items.reduce((curNumber ,item )=>{
        return curNumber + item.amount ;
        
    } , 0);
    console.log(cartCtx);
    return (<>
    <button  className={classes.button} onClick={props.onClick}>
       
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        
        <span className={classes.badge}> { noOfCartItems} </span>
    </button>
    
    </>
    )
    
};

export default HeaderCart ;