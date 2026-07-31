import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className='mx-auto flex max-w-2xl flex-col gap-6 p-10'>
      <Card>
        <CardHeader>
          <CardTitle>App Blueprint</CardTitle>
          <CardDescription>
            Starting point — replace this page with your app's real landing
            content.
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-wrap items-center gap-3'>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='outline'>Outline</Button>
          <Button variant='ghost'>Ghost</Button>
          <Button variant='destructive'>Destructive</Button>
          <Badge variant='primary'>Coach</Badge>
          <Badge variant='accent'>Parent</Badge>
          <Badge variant='outline'>Player</Badge>
        </CardContent>
      </Card>
    </main>
  );
}
