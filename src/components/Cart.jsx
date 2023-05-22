import './styles.css'

function Cart() {
	return (
		<div style={{ textAlign: "center" }}>
			<span style={{ fontSize: 30 }}>My Cart</span>
			<br />
			<span style={{ fontSize: 30 }}>Total: 100</span>
			<div className="productContainer">
				{}
			</div>
		</div>
	);
}
export default Cart;
