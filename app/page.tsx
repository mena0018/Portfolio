import {
  Navbar,
  ToggleLang,
  Home,
  About,
  Skills,
  ProjectList,
  Contact,
  Footer,
} from '@/components/index';
import { ContextProvider, ThemeContextProvider } from 'src/context/index';

export default function index() {
  return (
    <main>
      <ThemeContextProvider>
        <ContextProvider>
          <ToggleLang />
          <Navbar />
          <Home />
          <About />
          <Skills />
          <ProjectList />
          <Contact />
          <Footer />
        </ContextProvider>
      </ThemeContextProvider>
    </main>
  );
}
