import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

export default function DefaultForm() {
  return (
    <form className="flex mx-96 py-16 my-24 justify-center max-w-md flex-col gap-4">
      <div>
      <h2 className='mr-8 text-2xl font-semibold p-4'>Login in to your account</h2>
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Your email"
          />
        </div>
        <TextInput
          id="email1"
          placeholder="name@flowbite.com"
          required
          type="email"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password1"
            value="Your password"
          />
        </div>
        <TextInput
          id="password1"
          required
          type="password"
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">
          Remember me
        </Label>
      </div>
      <Button type="submit">
        Submit
      </Button>
    </form>
  )
}


