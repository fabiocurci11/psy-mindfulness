import { Button } from '@/components/ui/Button';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-center">Button Demo</h1>
        
        <div className="flex gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
        
        <div className="flex gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        
        <Button isLoading fullWidth>Loading...</Button>
      </div>
    </div>
  );
}

export default App;