import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';
import { Button } from 'react-toolbox/lib/button';

export default class Footer extends Component {
	render() {
		return (
			<div class={style.footer}>
				<h3>Preact Footer</h3>

				<footer class="footer-basic-centered">

					<p class="footer-company-motto">The company motto.</p>

					<p><Button label="just a test"/></p>

					<p class="footer-links">
						<a href="#">Home</a>
						·
						<a href="#">Blog</a>
						·
						<a href="#">Pricing</a>
						·
						<a href="#">About</a>
						·
						<a href="#">Faq</a>
						·
						<a href="#">Contact</a>
					</p>

					<p class="footer-company-name">Company Name &copy; 2015</p>

					</footer>


			</div>
		);
	}
}
