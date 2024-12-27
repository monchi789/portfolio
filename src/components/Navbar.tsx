import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { memo, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/about", label: "Sobre Me" },
  ];

  return (
    <nav>
      <div className="px-4">
        <div className="container mx-auto max-w-5xl flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl">🚀</div>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-blue-500 font-semibold font-[cambay] text-xl hover:text-blue-800 hover:underline transition duration-200"
            >
              <a
                href="https://github.com/monchi789/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Monchi789
              </a>
            </motion.span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex text-blue-400 space-x-8">
            {navLinks.map(({ path, label }) => (
              <motion.div
                key={path}
                whileHover={{ scale: 1.1 }}
                className="font-medium font-[inter] transition duration-300"
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 underline" : "hover:text-blue-500"
                  }
                >
                  {label}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleToggle}
            className="md:hidden text-blue-500 hover:text-blue-700 focus:outline-none"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map(({ path, label }) => (
                  <motion.div
                    key={path}
                    whileHover={{ x: 10 }}
                    className="block px-3 py-2 rounded-md text-base font-medium"
                  >
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-blue-500 underline"
                          : "text-blue-400 hover:text-blue-500"
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
});

export default Navbar;
