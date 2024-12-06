from visual import *

G = 6.7e-11

giant = sphere(pos=(-1e11,0,0), radius=2e10, color=color.red,
               make_trail=True, interval=10, retain=2000)
giant.mass = 2e30
giant.p = vector(0, 0, 1e4) * giant.mass

dwarf = sphere(pos=(1.5e11,0,0), radius=1e10, color=color.yellow,
               make_trail=True, interval=10, retain=2000)
dwarf.mass = 1e30
dwarf.p = -giant.p

dt = 1e5

while True:
  rate(200)

  dist = dwarf.pos - giant.pos
  force = G * giant.mass * dwarf.mass * dist / mag(dist)**3
  giant.p = giant.p + force*dt
  dwarf.p = dwarf.p - force*dt
  giant.pos = giant.pos + giant.p/giant.mass * dt
  dwarf.pos = dwarf.pos + dwarf.p/dwarf.mass * dt

  #for star in [giant, dwarf]:
  #  star.pos = star.pos + star.p/star.mass * dt

