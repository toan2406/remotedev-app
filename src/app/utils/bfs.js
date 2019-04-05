const ROOT_KEY = '_root_';

export default function bfs(object, target) {
  let queue = [];

  queue.push([[ROOT_KEY, object]]);

  while (queue.length) {
    const path = queue.shift();
    const lastStep = last(path);
    const [stepName, stepValue] = lastStep;

    if (stepName.toLowerCase().includes(target.toLowerCase()))
      return path.map(step => step[0]);

    if (isObject(stepValue) || isArray(stepValue)) {
      for (const key in stepValue) {
        if (stepValue.hasOwnProperty(key)) {
          const nextStep = [key, stepValue[key]];
          const nextPath = [...path, nextStep];
          queue.push(nextPath);
        }
      }
    }
  }

  return [];
}

const last = array => array[array.length - 1];

const isObject = value => typeof value === 'object';

const isArray = Array.isArray;
