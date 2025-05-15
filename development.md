# SimWork Development Guide

## Tech Stack

### Frontend
- **Framework**: Next.js (React)
- **Styling**: TailwindCSS with custom animations
- **State Management**: React Context API + localStorage
- **UI Components**: Custom components with Framer Motion for animations
- **3D/2.5D Elements**: Three.js for immersive environment
- **Icons/Assets**: Local SVGs and optimized images

### Data Management
- **Storage**: localStorage for MVP (simulating backend)
- **Data Structure**: JSON schemas for user progress, tasks, and analytics
- **Persistence**: Browser storage with export/import functionality

### Performance Optimization
- **Code Splitting**: Dynamic imports for route-based code splitting
- **Asset Optimization**: Next.js Image component for optimized loading
- **Lazy Loading**: Components and assets loaded on demand
- **Caching Strategy**: Local caching of simulation assets

## Architecture

### Component Structure
```
src/
├── app/                    # Next.js App Router
│   ├── page.js             # Home page
│   ├── demo/               # Demo page
│   ├── pitch-deck/         # Pitch deck page
│   ├── why-us/             # Why us page
│   ├── showcase/           # Showcase page
│   └── roadmap/            # Roadmap page
├── components/             # Reusable components
│   ├── layout/             # Layout components
│   ├── ui/                 # UI components
│   ├── game/               # Game-specific components
│   └── animations/         # Animation components
├── hooks/                  # Custom React hooks
├── context/                # React Context providers
├── lib/                    # Utility functions
├── data/                   # Mock data and schemas
└── styles/                 # Global styles and animations
```

### Data Flow
1. **User Interactions**: Captured via React event handlers
2. **State Updates**: Processed through Context API
3. **Persistence**: Saved to localStorage
4. **Rendering**: React components re-render based on state changes

## Development Roadmap

### Phase 1: MVP (Current Focus)
- [x] Project setup with Next.js
- [ ] Home page with interactive hero section
- [ ] Demo page with simulated work environment
- [ ] Basic game mechanics and navigation
- [ ] Task generation system
- [ ] Progress tracking
- [ ] Local storage integration

### Phase 2: Enhanced Features
- [ ] Additional role simulations
- [ ] Advanced analytics dashboard
- [ ] Expanded task library
- [ ] Performance scoring system
- [ ] User profiles and achievements

### Phase 3: Expansion
- [ ] Mobile app version
- [ ] Multiplayer capabilities
- [ ] VR/AR integration
- [ ] Enterprise features

## Development Guidelines

### Code Style
- Use functional components with hooks
- Implement proper TypeScript interfaces (when added)
- Follow the Airbnb React/JSX Style Guide
- Use meaningful component and variable names

### Performance Considerations
- Minimize re-renders using React.memo and useMemo
- Optimize animations for performance
- Implement proper loading states
- Use code splitting for larger components

### Accessibility
- Ensure proper contrast ratios
- Implement keyboard navigation
- Add ARIA attributes where necessary
- Test with screen readers

## Local Development

### Getting Started
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build production version
- `npm run start`: Start production server
- `npm run lint`: Run linting

## Testing Strategy

### Manual Testing
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Responsive design testing across device sizes
- User flow testing for intuitive navigation
- Performance testing for animations and transitions

### Future Automated Testing
- Unit tests for utility functions
- Component tests for UI elements
- Integration tests for user flows
- End-to-end tests for critical paths

## Deployment

### Deployment Strategy
- Vercel for hosting (seamless Next.js integration)
- GitHub for version control
- Continuous deployment from main branch

### Environment Variables
- None required for MVP (frontend-only)

## Usage Guide

### For Developers
1. Clone the repository
2. Install dependencies with `npm install`
3. Start development server with `npm run dev`
4. Access the application at `http://localhost:3000`

### For Users
1. Navigate to the deployed application
2. Explore the home page to understand SimWork's concept
3. Try the demo to experience the simulation
4. Navigate through different role stations
5. Complete tasks to see the assessment system in action
