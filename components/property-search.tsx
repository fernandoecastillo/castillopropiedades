"use client"

import * as React from "react"
import { Search, Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"
import {
  OPERACIONES,
  TIPOS_PROPIEDAD,
  CIUDADES_BUENOS_AIRES,
  CIUDADES_NOMBRES,
  AMBIENTES,
} from "@/lib/search-data"

function ComboboxField({
  label,
  placeholder,
  searchPlaceholder,
  emptyText,
  options,
  value,
  onValueChange,
}: {
  label: string
  placeholder: string
  searchPlaceholder: string
  emptyText: string
  options: string[]
  value: string
  onValueChange: (val: string) => void
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="h-10 w-full justify-between bg-background font-normal text-foreground hover:bg-background"
          >
            <span className="truncate">
              {value || placeholder}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[240px] p-0" align="start">
          <Command>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandList>
              <CommandEmpty>{emptyText}</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option}
                    value={option}
                    onSelect={(currentValue) => {
                      onValueChange(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {option}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export function PropertySearch() {
  const [operacion, setOperacion] = React.useState("")
  const [tipoPropiedad, setTipoPropiedad] = React.useState("")
  const [ciudad, setCiudad] = React.useState("Mar del Plata")
  const [barrio, setBarrio] = React.useState("Todos")
  const [ambientes, setAmbientes] = React.useState("")
  const [desde, setDesde] = React.useState("")
  const [hasta, setHasta] = React.useState("")

  const barriosDisponibles = React.useMemo(() => {
    if (!ciudad) return ["Todos"]
    return CIUDADES_BUENOS_AIRES[ciudad] || ["Todos"]
  }, [ciudad])

  const handleCiudadChange = React.useCallback((val: string) => {
    setCiudad(val)
    setBarrio("Todos")
  }, [])

  return (
    <div className="w-full rounded-xl border border-border/50 bg-card/95 p-5 shadow-2xl backdrop-blur-sm md:p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* 1. Operacion */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="operacion" className="text-xs text-muted-foreground">
            Operacion
          </Label>
          <Select value={operacion} onValueChange={setOperacion}>
            <SelectTrigger id="operacion" className="bg-background">
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              {OPERACIONES.map((op) => (
                <SelectItem key={op} value={op}>
                  {op}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* 2. Propiedad */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="propiedad" className="text-xs text-muted-foreground">
            Propiedad
          </Label>
          <Select value={tipoPropiedad} onValueChange={setTipoPropiedad}>
            <SelectTrigger id="propiedad" className="bg-background">
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              {TIPOS_PROPIEDAD.map((tipo) => (
                <SelectItem key={tipo} value={tipo}>
                  {tipo}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* 3. Ciudad (autocomplete) */}
        <ComboboxField
          label="Ciudad"
          placeholder="Seleccionar ciudad"
          searchPlaceholder="Buscar ciudad..."
          emptyText="Ciudad no encontrada."
          options={CIUDADES_NOMBRES}
          value={ciudad}
          onValueChange={handleCiudadChange}
        />

        {/* 4. Barrio (autocomplete) */}
        <ComboboxField
          label="Barrio"
          placeholder="Todos"
          searchPlaceholder="Buscar barrio..."
          emptyText="Barrio no encontrado."
          options={barriosDisponibles}
          value={barrio}
          onValueChange={setBarrio}
        />

        {/* 5. Ambientes */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="ambientes" className="text-xs text-muted-foreground">
            Ambientes
          </Label>
          <Select value={ambientes} onValueChange={setAmbientes}>
            <SelectTrigger id="ambientes" className="bg-background">
              <SelectValue placeholder="Cualquiera" />
            </SelectTrigger>
            <SelectContent>
              {AMBIENTES.map((n) => (
                <SelectItem key={n} value={String(n)}>
                  {n} {n === 1 ? "ambiente" : "ambientes"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* 6. Desde */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="desde" className="text-xs text-muted-foreground">
            Desde (USD)
          </Label>
          <Input
            id="desde"
            type="number"
            placeholder="0"
            min={0}
            value={desde}
            onChange={(e) => setDesde(e.target.value)}
            className="bg-background"
          />
        </div>

        {/* 7. Hasta */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="hasta" className="text-xs text-muted-foreground">
            Hasta (USD)
          </Label>
          <Input
            id="hasta"
            type="number"
            placeholder="Sin limite"
            min={0}
            value={hasta}
            onChange={(e) => setHasta(e.target.value)}
            className="bg-background"
          />
        </div>

        {/* Search button */}
        <div className="flex flex-col justify-end">
          <Button className="h-10 w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <Search className="h-4 w-4" />
            Buscar
          </Button>
        </div>
      </div>
    </div>
  )
}
