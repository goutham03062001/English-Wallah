import { View, Text } from 'react-native'
import React,{useContext} from 'react'
import { Button } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Dashboard from './Dashboard';

import { AuthContext } from '../../context/AuthContext';
import Classes from './Academic/AcademicStartingScreen';
import StartingScreen from './Competative/StartingScreen';
import NounsStartingScreen from "./Academic/Noun/NounsStartingScreen";
import PronounStartingScreen from './Academic/Pronoun/PronounStartingScreen';
import AdjectiveStartingScreen from './Academic/Adjective/AdjectiveStartingScreen';
import AdverbStartingScreen from './Academic/Adverb/AdverbStartingScreen';
import ConjunctionStartingScreen from './Academic/Conjunction/ConjunctionStartingScreen';
// import Verb from './Competative/ModelPapers/Verb';
import VerbStartingScreen from './Academic/Verb/VerbStartingScreen';
import ActiveAndPassiveStartingScreen from './Academic/ActiveAndPassive/ActiveAndPassiveStartingScreen';
import PrepositionStartingScreen from './Academic/Preposition/PrepositionStartingScreen';
import ArticlesStartingScreen from "./Academic/Articles/ArticlesStartingScreen";
import ModifiersStartingScreen from './Academic/Modifiers/ModifiersStartingScreen';
import NonFiniteVerbsStartingScreen from './Academic/NonFiniteVerbs/NonFiniteVerbsStartingScreen';
import QuestionTagsStartingScreen from './Academic/QuestionTags/QuestionTagsStartingScreen';
import DirectAndIndirectStarting from './Academic/DirectAndIndirect/DirectAndIndirectStarting';
import IfClauseStarting from './Academic/IfClause/IfClauseStarting';
import SubjectVerbAgreement from "./Academic/SubjectVerbAgreement/SubjectVerbAgreement";
import Phrase from "./Academic/Phrases/PhrasesStarting"
import ClausesStarting from './Academic/Clauses/ClausesStarting';
import FormationOfSentence from './Academic/FormationOfSentence/FormationOfSentence';
import SimpleCompoundComplex from "./Academic/SimpleCompoundComplex/SimpleCompundComplexStartingScreen";
import TensesAndTime from './Academic/TensesAndTime/TensesAndTime';
const DashboardHandler = () => {
    const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator>
    <Stack.Screen name = "Dashboard" component={Dashboard} />
    <Stack.Screen name="Academic" component={Classes} />
    <Stack.Screen name="Competitive" component={StartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Noun's" component={NounsStartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Pronoun" component={PronounStartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Adjective" component={AdjectiveStartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Adverb" component={AdverbStartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Conjunction" component={ConjunctionStartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Verb" component={VerbStartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Active And Passive Voice" component={ActiveAndPassiveStartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Preposition" component={PrepositionStartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Articles" component={ArticlesStartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Modifiers" component={ModifiersStartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Non-Finite Verbs" component={NonFiniteVerbsStartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "QuestionTags" component={QuestionTagsStartingScreen} options={{headerShown:false}}/>
    <Stack.Screen name = "Direct and Indirect Speech" component={DirectAndIndirectStarting} options={{headerShown:false}}/>
    <Stack.Screen name = "IfClause" component={IfClauseStarting} options={{headerShown:false}}/>
    <Stack.Screen name = "Subject-Verb Agreement" component={SubjectVerbAgreement} options={{headerShown:false}}/>
    <Stack.Screen name = "Phrase" component={Phrase} options={{headerShown:false}}/>
    <Stack.Screen name = "Clause" component={ClausesStarting} options={{headerShown:false}}/>
    <Stack.Screen name = "Formation of Sentence" component={FormationOfSentence} options={{headerShown:false}}/>
    <Stack.Screen name = "Simple Compound Complex" component={SimpleCompoundComplex} options={{headerShown:false}}/>
    <Stack.Screen name = "Tenses And Time" component={TensesAndTime} options={{headerShown:false}}/>
    
    </Stack.Navigator>
  )
}

export default DashboardHandler