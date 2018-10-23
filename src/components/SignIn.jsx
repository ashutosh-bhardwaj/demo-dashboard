import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Formik, Form, Field } from 'formik';

const styles = theme => ({
	layout: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
			.spacing.unit * 3}px`
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit
	},
	submit: {
		marginTop: theme.spacing.unit * 3
	}
});

class SignIn extends React.Component {

	render() {
		const { classes } = this.props;

		return (
			<React.Fragment>
				<CssBaseline />
				<main className={classes.layout}>
					<Paper className={classes.paper}>
						<Avatar className={classes.avatar}>
							<LockIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
						<Formik
							initialValues={{ email: '', password: '' }}
							validate={values => {
								let errors = {};
								if (!values.email) {
									errors.email = 'Required';
								} else if (
									!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
								) {
									errors.email = 'Invalid email address';
								}
								if (!values.password) {
									errors.password = 'Required';
								} else if (values.password.length < 6) {
									errors.password = 'Password Must be 6 characters long';
								}
								return errors;
							}}
							onSubmit={(values, { setSubmitting }) => {
								setTimeout(() => {
									alert(JSON.stringify(values, null, 2));
									setSubmitting(false);
								}, 400);
							}}
						>
							<Form className={classes.form}>
								<Field
									type="email"
									name="email"
									render={({ form, field }) => (
										<FormControl margin="normal" required fullWidth>
											<InputLabel
												error={
													Boolean(form.touched[field.name] && form.errors[field.name])
												}
												htmlFor="email"
											>
												Email Address
											</InputLabel>
											<Input
												id="email"
												name="email"
												autoComplete="email"
												autoFocus
												{...field}
											/>
										</FormControl>
									)}
								/>

								<Field
									type="password"
									name="password"
									render={({ field, form }) => (
										<FormControl margin="normal" required fullWidth>
											<InputLabel
												error={
													Boolean(form.touched[field.name] && form.errors[field.name])
												}
												htmlFor="password"
											>
												Password
											</InputLabel>
											<Input
												name="password"
												type="password"
												id="password"
												autoComplete="current-password"
												{...field}
											/>
										</FormControl>
									)}
								/>
								<FormControlLabel
									control={<Checkbox value="remember" color="primary" />}
									label="Remember me"
								/>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
								>
									Sign in
								</Button>
							</Form>
						</Formik>
					</Paper>
				</main>
			</React.Fragment>
		);
	}
}

SignIn.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);
