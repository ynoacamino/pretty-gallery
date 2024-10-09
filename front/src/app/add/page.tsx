'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { RatioOptions } from '@/types/image';
import { useState } from 'react';
import { action } from './action';

export default function Page() {
  const [image, setImage] = useState<File | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form action={action} className="w-full max-w-md bg-background rounded-md p-4 flex flex-col gap-4">
        <h1 className="text-5xl font-bold">Add</h1>
        <Input
          required
          type="file"
          name="image"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setImage(file);
            }
          }}
          accept="image/*"
        />
        <Select name="ratio" required>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a ratio" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={RatioOptions.SQUARE}>Square</SelectItem>
            <SelectItem value={RatioOptions.LANDSCAPE}>Landscape</SelectItem>
            <SelectItem value={RatioOptions.PORTRAIT}>Portrait</SelectItem>
          </SelectContent>
        </Select>
        {
          image ? (
            <img
              src={URL.createObjectURL(image)}
              alt=""
              className="w-full rounded-md"
            />
          ) : (
            <div
              className="w-full bg-gray-200 rounded-md"
            />
          )
        }
        <Button type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
