"use client";

type HeroControls = {
  font: string;
  fontSize: number;
  fontWeight: number;
  letterSpacing: number;
  lineHeight: number;
  color: string;
  opacity: number;
  imageScale: number;
  imageX: number;
  imageY: number;
  headingX: number;
  headingY: number;
};

type HeroDevToolbarProps = {
  values: HeroControls;
  onChange: (key: keyof HeroControls, value: string | number) => void;
  onReset: () => void;
};

const fonts = [
  {
    label: "Gakuran",
    value: "var(--font-gakuran)",
  },
  {
    label: "Grandover",
    value: "var(--font-grandover)",
  },
  {
    label: "Hexaline",
    value: "var(--font-hexaline)",
  },
  {
    label: "ModernCyber",
    value: "var(--font-moderncyber)",
  },
  {
    label: "Ryzes",
    value: "var(--font-ryzes)",
  },
  {
    label: "Savery",
    value: "var(--font-savery)",
  },
  {
    label: "Savery Outline",
    value: "var(--font-savery-outline)",
  },
];

type SliderProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
};

function Slider({ label, value, min, max, step = 1, onChange }: SliderProps) {
  return (
    <label className="block">
      <div className="mb-1.5 flex items-center justify-between gap-3">
        <span className="text-[10px] uppercase tracking-[0.14em] text-white/50">
          {label}
        </span>

        <span className="font-mono text-[10px] text-[#ff5500]">{value}</span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full cursor-pointer accent-[#ff5500]"
      />
    </label>
  );
}

export default function HeroDevToolbar({
  values,
  onChange,
  onReset,
}: HeroDevToolbarProps) {
  return (
    <aside className="fixed bottom-4 right-4 z-[100] max-h-[85vh] w-[290px] overflow-y-auto rounded-xl border border-white/15 bg-[#111]/95 p-4 font-mono shadow-2xl backdrop-blur-xl">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#ff5500]">
            Hero Dev Tools
          </p>

          <p className="mt-1 text-xs text-white/50">
            Live composition controls
          </p>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="border border-white/15 px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-white/70 transition hover:border-[#ff5500] hover:text-[#ff5500]"
        >
          Reset
        </button>
      </div>

      <div className="space-y-5">
        {/* TYPOGRAPHY */}

        <section className="space-y-3 border-t border-white/10 pt-4">
          <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
            Typography
          </p>

          <label className="block">
            <span className="mb-1.5 block text-[10px] uppercase tracking-[0.14em] text-white/50">
              Font
            </span>

            <select
              value={values.font}
              onChange={(event) => onChange("font", event.target.value)}
              className="w-full border border-white/15 bg-black px-2 py-2 text-xs text-white outline-none focus:border-[#ff5500]"
            >
              {fonts.map((font) => (
                <option key={font.label} value={font.value}>
                  {font.label}
                </option>
              ))}
            </select>
          </label>

          <Slider
            label="Font Size"
            value={values.fontSize}
            min={8}
            max={22}
            step={0.5}
            onChange={(value) => onChange("fontSize", value)}
          />

          <Slider
            label="Font Weight"
            value={values.fontWeight}
            min={100}
            max={900}
            step={100}
            onChange={(value) => onChange("fontWeight", value)}
          />

          <Slider
            label="Letter Spacing"
            value={values.letterSpacing}
            min={-0.15}
            max={0.2}
            step={0.01}
            onChange={(value) => onChange("letterSpacing", value)}
          />

          <Slider
            label="Line Height"
            value={values.lineHeight}
            min={0.5}
            max={1.2}
            step={0.01}
            onChange={(value) => onChange("lineHeight", value)}
          />

          <Slider
            label="Heading Opacity"
            value={values.opacity}
            min={0.1}
            max={1}
            step={0.05}
            onChange={(value) => onChange("opacity", value)}
          />

          <label className="block">
            <span className="mb-1.5 block text-[10px] uppercase tracking-[0.14em] text-white/50">
              Heading Color
            </span>

            <input
              type="color"
              value={values.color}
              onChange={(event) => onChange("color", event.target.value)}
              className="h-8 w-full cursor-pointer border border-white/15 bg-transparent"
            />
          </label>
        </section>

        {/* SUBJECT */}

        <section className="space-y-3 border-t border-white/10 pt-4">
          <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
            Subject
          </p>

          <Slider
            label="Image Scale"
            value={values.imageScale}
            min={0.5}
            max={1.8}
            step={0.01}
            onChange={(value) => onChange("imageScale", value)}
          />

          <Slider
            label="Image X"
            value={values.imageX}
            min={-400}
            max={400}
            step={1}
            onChange={(value) => onChange("imageX", value)}
          />

          <Slider
            label="Image Y"
            value={values.imageY}
            min={-400}
            max={400}
            step={1}
            onChange={(value) => onChange("imageY", value)}
          />
        </section>

        {/* HEADING POSITION */}

        <section className="space-y-3 border-t border-white/10 pt-4">
          <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
            Heading Position
          </p>

          <Slider
            label="Heading X"
            value={values.headingX}
            min={-400}
            max={400}
            step={1}
            onChange={(value) => onChange("headingX", value)}
          />

          <Slider
            label="Heading Y"
            value={values.headingY}
            min={-400}
            max={400}
            step={1}
            onChange={(value) => onChange("headingY", value)}
          />
        </section>
      </div>
    </aside>
  );
}
