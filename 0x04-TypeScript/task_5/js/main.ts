export interface MajorCredits {
  _brand: 'Major';
  credits: number;
}

export interface MinorCredits {
  _brand: 'Minor';
  credits: number;
}

export function setMajorCredits(subject1: MajorCredits, subject2: MajorCredits){
  return { 
    credits: subject1.credits + subject2.credits
  } as MajorCredits;
}

export function setMinorCredits(subject1: MinorCredits, subject2: MinorCredits){
  return { 
    credits: subject1.credits + subject2.credits
  } as MinorCredits;
}
