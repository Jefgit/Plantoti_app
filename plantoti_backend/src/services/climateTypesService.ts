import ClimateClassification from "../data/climateTypes";
import { ClimateType } from "../types";

const getClimateTypes = (): ClimateType[] => {
    return ClimateClassification;
};

export default {
    getClimateTypes
};