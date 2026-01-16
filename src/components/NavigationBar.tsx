import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export const NavigationBar = () => {
  return (
    <Navbar fluid>
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-cyan-600">
          ZP
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <div className="flex items-center justify-end gap-8">
          <NavbarLink href="/home" active className="h-10 flex items-center">
            Home
          </NavbarLink>
          <NavbarLink href="/resume" className="h-10 flex items-center">
            Resume
          </NavbarLink>
          <NavbarLink href="/projects" className="h-10 flex items-center">
            Projects
          </NavbarLink>
          <Button className="h-10 bg-cyan-600 hover:bg-cyan-800 px-6 py-0">
            Contact
          </Button>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
};
