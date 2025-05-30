import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={reactLogo} alt="React" />
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-bold">Vite + React + shadcn/ui</h1>
                <p className="text-sm text-muted-foreground">Modern React Development Stack</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">React 19</Badge>
              <Badge variant="outline">Vite</Badge>
              <Badge variant="default">Tailwind CSS 4</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Welcome Card */}
          <Card className="md:col-span-2 lg:col-span-2">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <img src={viteLogo} className="h-12 w-12" alt="Vite logo" />
                <img src={reactLogo} className="h-12 w-12 animate-spin" alt="React logo" />
              </div>
              <CardTitle className="text-2xl">Welcome to Your New Project!</CardTitle>
              <CardDescription>
                A modern React application built with Vite, shadcn/ui, and Tailwind CSS 4.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Button onClick={() => setCount((count) => count + 1)} size="lg">
                    Count is {count}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setCount(0)}
                  >
                    Reset
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Edit <code className="bg-muted px-1 rounded">src/App.jsx</code> and save to test HMR
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features Card */}
          <Card>
            <CardHeader>
              <CardTitle>✨ Features</CardTitle>
              <CardDescription>What's included in this setup</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">⚡ Vite</span>
                  <Badge variant="secondary">Latest</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">⚛️ React 19</span>
                  <Badge variant="secondary">RC</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">🎨 Tailwind CSS 4</span>
                  <Badge variant="secondary">Beta</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">🧩 shadcn/ui</span>
                  <Badge variant="secondary">Latest</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        {/* Tabs Section */}
        <Tabs defaultValue="components" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="components" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Available Components</CardTitle>
                <CardDescription>shadcn/ui components ready to use</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <Badge variant="outline">Button</Badge>
                  <Badge variant="outline">Card</Badge>
                  <Badge variant="outline">Badge</Badge>
                  <Badge variant="outline">Avatar</Badge>
                  <Badge variant="outline">Tabs</Badge>
                  <Badge variant="outline">Separator</Badge>
                  <Badge variant="outline">Input</Badge>
                  <Badge variant="outline">Dialog</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="getting-started" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
                <CardDescription>Continue building your application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">1. Add more shadcn/ui components with <code className="bg-muted px-1 rounded">npx shadcn@latest add [component]</code></p>
                <p className="text-sm">2. Customize your theme in <code className="bg-muted px-1 rounded">components.json</code></p>
                <p className="text-sm">3. Build your application logic</p>
                <p className="text-sm">4. Deploy to your favorite platform</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resources" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Useful Links</CardTitle>
                <CardDescription>Documentation and resources</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-col space-y-1">
                  <a href="https://ui.shadcn.com" target="_blank" className="text-sm text-blue-600 hover:underline">
                    📚 shadcn/ui Documentation
                  </a>
                  <a href="https://react.dev" target="_blank" className="text-sm text-blue-600 hover:underline">
                    ⚛️ React Documentation
                  </a>
                  <a href="https://vite.dev" target="_blank" className="text-sm text-blue-600 hover:underline">
                    ⚡ Vite Documentation
                  </a>
                  <a href="https://tailwindcss.com" target="_blank" className="text-sm text-blue-600 hover:underline">
                    🎨 Tailwind CSS Documentation
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default App
