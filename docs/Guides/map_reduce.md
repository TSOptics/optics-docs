---
title: map/reduce
sidebar_position: 2
---

Besides total and partial an optic can be of a third type: **mapped**.  
A mapped optic is focused on multiple elements. When you read from a mapped optic you get all focused elements, and when you set a new value it is applied to all elements.

```ts
const onNumbers = createState([4, 8, 9, 3, 7]).map();
// onNumbers: Optic<number, mapped>

onNumbers.get(); // [14, 28, 79, 34, 57]

onNumbers.set((n) => n + 1);
onNumbers.get(); // [15, 29, 80, 35, 58]

onNumbers.set(0);
onNumbers.get(); // [0, 0, 0, 0, 0]
```

You can get a mapped optic from any optic focused on an array by calling `.map()`.

```ts
const onClientValidation = createState<Record<string, boolean>>({
  Giuseppe: false,
  GianLuigi: true,
  Alessandra: false,
});

const onValidation = onClientValidation.values().map(); // Optic<boolean, mapped>
onValidation.get(); // [false, true, false]

onValidation.set(true);
onClientValidation.get(); // { Giuseppe: true, GianLuigi: true, Alessandra: true }
```

## Derive from mapped optic

Once you have a mapped optic you can continue to focus further on the elements, which will get you a new mapped optic:

```ts
const onNationalParks = createState([
  { name: "Denali", squareKilometers: 19185.8 },
  { name: "Redwood", squareKilometers: 562.5 },
  { name: "Yellowstone", squareKilometers: 8983.2 },
]).map(); // Optic<{ name: string; squareKilometers: number }, mapped>

const onAreas = onNationalParks.squareKilometers; // Optic<number, mapped>

onAreas.get(); // [19185.8, 562.5, 8983.2]
```

Here `onAreas` focuses on the squareKilometers property of each element focused by `onNationalParks`.

### Mapped optic specfic methods

Mapped optics also have additional methods not found on total or partial optics. They resemble those from Javascript's `Array` type like `sort`, `filter` or `slice`.

- `filter`

```ts
const onBigNationalParks = onNationalParks.filter(
  (park) => park.squareKilometers > 10000
);
// onBigNationalParks: Optic<{ name: string; squareKilometers: number }, mapped>

onBigNationalParks.get(); // [{ name: 'Denali', squareKilometers: 19185.8 }]
```

- `sort`

```ts
const onNationalParksByArea = onNationalParks.sort(
  (a, b) => a.squareKilometers - b.squareKilometers
);
// onNationalParksByArea: Optic<{ name: string; squareKilometers: number }, mapped>

const nationalParksByArea = onNationalParksByArea.get();
// nationalParksByArea = [
//     { name: 'Redwood', squareKilometers: 562.5 },
//     { name: 'Yellowstone', squareKilometers: 8983.2 },
//     { name: 'Denali', squareKilometers: 19185.8 }
// ];
```

They also have methods to focus back on a single element, giving you a partial optic.

- `findFirst`

```ts
const onFirstBelow10000 = onNationalParks.findFirst(
  (park) => park.squareKilometers < 10000
); // Optic<{ name: string; squareKilometers: number }, partial>

onFirstBelow10000.get(); // { name: 'Redwood', squareKilometers: 562.5 }
```

- `min` and `max`

```ts
const maxParkByArea = onNationalParks.max((park) => park.squareKilometers);
// maxParkByArea: Optic<{ name: string; squareKilometers: number }, partial>

const minParkByArea = onNationalParks.min((park) => park.squareKilometers);
// minParkByArea: Optic<{ name: string; squareKilometers: number }, partial>

maxParkByArea.get(); // { name: 'Denali', squareKilometers: 19185.8 }
minParkByArea.get(); // { name: 'Redwood', squareKilometers: 562.5 }
```

## Chain mapped optics

You can keep calling `.map()` as long the focused value is an array.

You will get a flattened representation of your data.

```ts
const onArrayOfArray = createState([[7, 98], [56, 4, 2], [300]]);
// onArrayOfArray: Optic<number[][]>

const onNumbers = onArrayOfArray.map().map();
// onNumbers: Optic<number, mapped>

onNumbers.get(); // [7, 98, 56, 4, 2, 300]

onNumbers.set(42);
onArrayOfArray.get(); // [[42, 42], [42, 42, 42], [42]]
```
