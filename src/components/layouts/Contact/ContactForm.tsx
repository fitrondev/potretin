"use client";

import { useState } from "react";

import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <Card className="gap-4 shadow-xl">
      <CardHeader className="pb-8 text-center">
        <CardTitle className="text-foreground mb-2 text-2xl font-bold">
          Konsultasi Gratis
        </CardTitle>
        <p className="text-muted-foreground">
          Ceritakan kebutuhan fotografi Anda dan dapatkan penawaran terbaik dari
          kami.
        </p>
      </CardHeader>

      <CardContent className="p-8 pt-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-foreground text-sm font-medium"
            >
              Nama Lengkap *
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Masukkan nama lengkap Anda"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-foreground text-sm font-medium"
            >
              Email *
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="nama@email.com"
            />
          </div>

          {/* Phone Input */}
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-foreground text-sm font-medium"
            >
              Nomor Telepon
            </label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+62 812-3456-7890"
            />
          </div>

          {/* Service Select */}
          <div className="space-y-2">
            <label
              htmlFor="service"
              className="text-foreground text-sm font-medium"
            >
              Jenis Layanan *
            </label>
            <Select
              value={formData.service}
              onValueChange={handleSelectChange}
              required
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih jenis layanan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="potret">Fotografi Potret</SelectItem>
                <SelectItem value="pernikahan">Fotografi Pernikahan</SelectItem>
                <SelectItem value="komersial">Fotografi Komersial</SelectItem>
                <SelectItem value="event">Fotografi Event</SelectItem>
                <SelectItem value="lainnya">Lainnya</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message Textarea */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-foreground text-sm font-medium"
            >
              Pesan *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Ceritakan detail kebutuhan fotografi Anda, tanggal acara, lokasi, dan informasi penting lainnya..."
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full">
            <Send className="mr-2 h-4 w-4" />
            Kirim Pesan
          </Button>

          {/* Privacy Note */}
          <p className="text-muted-foreground text-center text-xs">
            Dengan mengirim pesan ini, Anda menyetujui bahwa kami akan
            menghubungi Anda untuk konsultasi gratis.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
