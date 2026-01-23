import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
	{ name: 'Home', path: '/' },
	{ name: 'About', path: '/about' },
	{ name: 'Services', path: '/services' },
	{ name: 'Portfolio', path: '/portfolio' },
	{ name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
	const [imgError, setImgError] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [location]);

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
				? 'bg-background/95 backdrop-blur-md border-b border-border/50'
				: 'bg-transparent'
				}`}
		>
			<nav className="container-custom">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<Link to="/" className="flex items-center gap-2 group">
						{!imgError ? (<img src="/favicon.png" alt="Subtask" className="rounded-lg bg-gold-gradient h-10 w-10 flex items-center justify-center object-cover" />) :
							(<div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center">
								<span className="text-primary-foreground font-bold text-xl">S</span>
							</div>)}
						<span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
							SubTask
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center gap-8">
						{navLinks.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								className={`relative text-sm font-medium transition-colors gold-underline ${location.pathname === link.path
									? 'text-primary'
									: 'text-muted-foreground hover:text-foreground'
									}`}
							>
								{link.name}
							</Link>
						))}
					</div>

					{/* CTA Button */}
					<div className="hidden lg:block">
						<Button variant="gold" asChild>
							<Link to="/contact">Get a Quote</Link>
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
					>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="lg:hidden bg-card border-b border-border"
					>
						<div className="container-custom py-6 space-y-4">
							{navLinks.map((link, index) => (
								<motion.div
									key={link.path}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.1 }}
								>
									<Link
										to={link.path}
										className={`block py-2 text-lg font-medium transition-colors ${location.pathname === link.path
											? 'text-primary'
											: 'text-muted-foreground hover:text-foreground'
											}`}
									>
										{link.name}
									</Link>
								</motion.div>
							))}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: navLinks.length * 0.1 }}
								className="pt-4"
							>
								<Button variant="gold" className="w-full" asChild>
									<Link to="/contact">Get a Quote</Link>
								</Button>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
};
